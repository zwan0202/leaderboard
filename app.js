let groups = [];
let currentEditingGroupId = null;

document.addEventListener('DOMContentLoaded', async function() {
    groups = await loadGroupsFromJSON();
    renderLeaderboard();
    setupEventListeners();
});

function setupEventListeners() {
    // Add Group
    document.getElementById('addGroupBtn').addEventListener('click', openAddGroupModal);
    
    // Remove Groups
    document.getElementById('removeGroupBtn').addEventListener('click', removeSelectedGroups);
    
    // Export
    document.getElementById('exportBtn').addEventListener('click', exportToJSON);
    
    // Load JSON
    document.getElementById('loadJsonBtn').addEventListener('click', () => {
        document.getElementById('jsonFileInput').click();
    });
    
    // File input change
    document.getElementById('jsonFileInput').addEventListener('change', loadFromJSONFile);
    
    // Select all checkbox
    document.getElementById('selectAll').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.group-checkbox');
        checkboxes.forEach(cb => cb.checked = this.checked);
    });
    
    // Add member in modal
    document.getElementById('addMemberBtn').addEventListener('click', addMemberInput);
    
    // Add group form submit
    document.getElementById('addGroupForm').addEventListener('submit', handleAddGroup);
    
    // Edit score form submit
    document.getElementById('editScoreForm').addEventListener('submit', handleEditScore);
    
    // Close modal
    document.querySelectorAll('.close, .close-modal').forEach(element => {
        element.addEventListener('click', closeModals);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModals();
        }
    });
}

function renderLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = '';
    
    const sortedGroups = sortGroupsByScore([...groups]);
    
    const groupsWithScores = sortedGroups.filter(g => g.bestScore !== null).length;
    
    sortedGroups.forEach((group, index) => {
        const row = createLeaderboardRow(group, index + 1, groupsWithScores);
        tbody.appendChild(row);
    });
}

function sortGroupsByScore(groupsToSort) {
    return groupsToSort.sort((a, b) => {
        // Groups with no score go to bottom
        if (a.bestScore === null) return 1;
        if (b.bestScore === null) return -1;
        return b.bestScore - a.bestScore;
    });
}

function createLeaderboardRow(group, rank, groupsWithScores) {
    const row = document.createElement('tr');
    
    // Add rank class for top 3, but only if:
    // 1. The group has a score
    // 2. The rank is within the number of groups with scores
    // 3. The rank is 3 or less
    const shouldColor = group.bestScore !== null && rank <= Math.min(3, groupsWithScores);
    
    if (shouldColor) {
        row.classList.add(`rank-${rank}`);
    }
    
    // Rank
    const rankCell = document.createElement('td');
    rankCell.style.textAlign = 'center';
    if (shouldColor) {
        rankCell.innerHTML = `<span class="rank-badge">${rank}</span>`;
    } else {
        rankCell.innerHTML = `<span class="rank-badge-normal">${rank}</span>`;
    }
    row.appendChild(rankCell);
    
    // Checkbox
    const checkboxCell = document.createElement('td');
    checkboxCell.style.textAlign = 'center';
    checkboxCell.innerHTML = `<input type="checkbox" class="group-checkbox" data-group-id="${group.id}">`;
    row.appendChild(checkboxCell);
    
    // Team name
    const nameCell = document.createElement('td');
    nameCell.innerHTML = `<strong>${group.name}</strong>`;
    row.appendChild(nameCell);
    
    // Members
    const membersCell = document.createElement('td');
    const membersContainer = document.createElement('div');
    membersContainer.className = 'members-container';
    
    group.members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <img src="${member.photo}" alt="${member.name}" class="member-photo" title="${member.name}">
            <div class="member-name" title="${member.name}">${member.name}</div>
        `;
        membersContainer.appendChild(memberCard);
    });
    
    membersCell.appendChild(membersContainer);
    row.appendChild(membersCell);
    
    // Score
    const scoreCell = document.createElement('td');
    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'clickable-score';
    scoreDiv.onclick = () => openEditScoreModal(group.id);
    
    if (group.bestScore !== null) {
        scoreDiv.innerHTML = `<span class="score-value">${group.bestScore.toFixed(4)}</span>`;
    } else {
        scoreDiv.innerHTML = `<span class="no-score">Not evaluated</span>`;
    }
    
    scoreCell.appendChild(scoreDiv);
    row.appendChild(scoreCell);
    
    // Last updated
    const timeCell = document.createElement('td');
    const timeDiv = document.createElement('div');
    timeDiv.className = 'clickable-time';
    timeDiv.onclick = () => updateTime(group.id);
    
    if (group.lastUpdated !== null && group.lastUpdated !== undefined) {
        timeDiv.innerHTML = formatDate(new Date(group.lastUpdated));
    } else {
        timeDiv.innerHTML = '<span class="no-time">None</span>';
    }
    
    timeCell.appendChild(timeDiv);
    row.appendChild(timeCell);
    
    return row;
}

function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

function exportToJSON() {
    const dataStr = JSON.stringify(groups, null, 4);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    
    // Generate filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    link.download = `leaderboard-${timestamp}.json`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('Leaderboard exported successfully!');
}

function loadFromJSONFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const loadedGroups = JSON.parse(e.target.result);
            
            if (!Array.isArray(loadedGroups)) {
                throw new Error('Invalid JSON format: expected an array');
            }
            
            groups = loadedGroups;
            saveGroupsToStorage(groups); // Save to localStorage
            renderLeaderboard();
            alert('Groups loaded successfully from JSON file!');
        } catch (error) {
            alert('Error loading JSON file: ' + error.message);
        }
    };
    reader.readAsText(file);
    
    event.target.value = '';
}

function openAddGroupModal() {
    document.getElementById('addGroupModal').style.display = 'block';
    document.getElementById('addGroupForm').reset();
    
    const memberInputs = document.getElementById('memberInputs');
    memberInputs.innerHTML = `
        <div class="member-input">
            <input type="text" class="member-name" placeholder="Student Name" required>
        </div>
    `;
}

function addMemberInput() {
    const memberInputs = document.getElementById('memberInputs');
    const currentCount = memberInputs.querySelectorAll('.member-input').length;
    
    if (currentCount >= 4) {
        alert('Maximum 4 members per group');
        return;
    }
    
    const newInput = document.createElement('div');
    newInput.className = 'member-input';
    newInput.innerHTML = `
        <input type="text" class="member-name" placeholder="Student Name" required>
    `;
    memberInputs.appendChild(newInput);
}

async function handleAddGroup(e) {
    e.preventDefault();
    
    const groupName = document.getElementById('groupName').value;
    const memberInputs = document.querySelectorAll('.member-input');
    
    const members = [];

    for (let input of memberInputs) {
        const name = input.querySelector('.member-name').value;
        
        members.push({ name, photo: DEFAULT_AVATAR });
    }
    
    const newGroup = {
        id: 'group_' + Date.now(),
        name: groupName,
        members: members,
        bestScore: null,
        lastUpdated: null
    };
    
    groups.push(newGroup);
    saveGroupsToStorage(groups); // Save to localStorage
    renderLeaderboard();
    closeModals();
}

function removeSelectedGroups() {
    const checkboxes = document.querySelectorAll('.group-checkbox:checked');
    
    if (checkboxes.length === 0) {
        alert('Please select at least one group to remove');
        return;
    }
    
    if (!confirm(`Are you sure you want to remove ${checkboxes.length} group(s)?`)) {
        return;
    }
    
    const idsToRemove = Array.from(checkboxes).map(cb => cb.dataset.groupId);
    groups = groups.filter(g => !idsToRemove.includes(g.id));
    
    saveGroupsToStorage(groups); // Save to localStorage
    renderLeaderboard();
    
    document.getElementById('selectAll').checked = false;
}

function openEditScoreModal(groupId) {
    currentEditingGroupId = groupId;
    const group = groups.find(g => g.id === groupId);
    
    document.getElementById('editScoreGroupName').textContent = `Group: ${group.name}`;
    document.getElementById('newScore').value = group.bestScore !== null ? group.bestScore : '';
    document.getElementById('editScoreModal').style.display = 'block';
}

function handleEditScore(e) {
    e.preventDefault();
    
    const newScore = parseFloat(document.getElementById('newScore').value);
    
    const group = groups.find(g => g.id === currentEditingGroupId);
    if (group) {
        group.bestScore = newScore;
        saveGroupsToStorage(groups); // Save to localStorage
        renderLeaderboard();
        closeModals();
    }
}

function updateTime(groupId) {
    const group = groups.find(g => g.id === groupId);
    if (group) {
        group.lastUpdated = Date.now();
        saveGroupsToStorage(groups); // Save to localStorage
        renderLeaderboard();
    }
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    currentEditingGroupId = null;
}