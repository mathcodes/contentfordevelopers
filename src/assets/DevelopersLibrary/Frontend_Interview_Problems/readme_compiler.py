import os

def get_readmes(directory):
    """Recursively find all README.md files in the given directory."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower() == "readme.md":
                yield os.path.join(root, file)

def compile_readmes(directory):
    """Concatenate all README.md files in the given directory and its subdirectories."""
    with open("one.md", "w") as outfile:
        for readme_path in get_readmes(directory):
            with open(readme_path, "r") as infile:
                outfile.write(f'# File: {readme_path}\n\n')
                outfile.write(infile.read())
                outfile.write('\n\n')

# Use the function with the directory of your choice
compile_readmes("./")