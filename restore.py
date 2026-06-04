import json
import os

log_path = r'C:\Users\aditya\.gemini\antigravity\brain\166b3939-7d23-49d0-a7f2-f23f77ea69b4\.system_generated\logs\transcript.jsonl'

files = {}

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        if 'write_to_file' in line:
            try:
                data = json.loads(line)
                calls = data.get('tool_calls', [])
                if not calls and 'step_index' in data:
                    # check if the tool calls are wrapped differently
                    pass
                for call in calls:
                    if call['name'] == 'write_to_file':
                        target = call['args']['TargetFile'].strip('"')
                        content = call['args']['CodeContent'].strip('"').replace('\\n', '\n').replace('\\"', '"')
                        if 'src\\components' in target or 'src/components' in target:
                            files[target] = content
            except Exception as e:
                pass

for path, content in files.items():
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        print(f"Restored: {path}")

print("Done restoring files.")
