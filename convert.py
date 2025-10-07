import base64
import os
from pathlib import Path
from typing import Optional

def get_mime_type(file_path: str) -> str:
    ext = Path(file_path).suffix.lower()
    mime_types = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml',
        '.bmp': 'image/bmp'
    }
    return mime_types.get(ext, 'image/jpeg')

def file_to_base64(file_path: str) -> str:
    try:
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"File not found: {file_path}")
        
        with open(file_path, 'rb') as image_file:
            base64_string = base64.b64encode(image_file.read()).decode('utf-8')
        
        mime_type = get_mime_type(file_path)
        
        data_url = f"data:{mime_type};base64,{base64_string}"
        
        return data_url
        
    except Exception as e:
        raise Exception(f"Failed to convert file: {str(e)}")

def convert_multiple_photos(file_paths: list) -> list:
    results = []
    
    for file_path in file_paths:
        try:
            data_url = file_to_base64(file_path)
            results.append({
                'path': file_path,
                'photo': data_url
            })
        except Exception as e:
            results.append({
                'path': file_path,
                'error': str(e)
            })
            print(f"Failed: {file_path} - {str(e)}")
    
    return results

if __name__ == "__main__":
    import json

    photos = [
        'a1.jpg',
        'a2.jpeg',
        'a3.jpeg'
    ]
    
    results = convert_multiple_photos(photos)

    with open('photos.json', 'w') as f:
        json.dump(results, f, indent=2)
