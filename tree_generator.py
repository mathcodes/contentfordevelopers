import os

def format_tree(tree, indent_char='|   ', last_indent_char='|__ '):
    lines = tree.strip().split('\n')
    formatted_lines = []

    min_indent = min(len(line) - len(line.strip()) for  line in lines if line.strip())

    for line in lines:
        indent_level = (len(line) - len(line.strip()) - min_indent) // len(indent_char) + 1
        formatted_line = line.strip()

        if indent_level > 0:
            formatted_line = indent_char * (indent_level - 1) + last_indent_char + formatted_line

        formatted_lines.append(formatted_line)

    formatted_tree = '\n'.join(formatted_lines)

    return formatted_tree

def get_directory_tree(directory):
    tree_structure = ""

    for root, dirs, files in os.walk(directory):

        current_level = root.count(os.sep) - directory.count(os.sep)

        indent ="|   " * current_level

        tree_structure += f"{indent}{os.path.basename(root)}"

        subindent = "|   " * (current_level + 1)

        for file in files:
            tree_structure += f"{subindent}{file}\n"
    return tree_structure

current_directory = os.getcwd()

tree_structure = get_directory_tree(current_directory)

formatted_tree = format_tree(tree_structure)

file_name = input("Enter the file name to save the tree. Make sure is ends in either .md or .txt: ")

with open(file_name, 'w') as f:
    f.write(formatted_tree)

print(f"You did it man, '{file_name}' is ready to go in your directory.")

# src
#     components
#         About
#         Nav
#     assets
#         images
#             headshot.png
#     index.js