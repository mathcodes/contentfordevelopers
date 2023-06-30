import os
import subprocess
print(os.getcwd())

# Function to format the tree structure
def format_tree(tree, omit_patterns=[], indent_char='|   ', last_indent_char='└── ', empty_indent_char='    '):
    lines = tree.strip().split('\n')
    formatted_lines = []

    # Determine the minimum indentation level
    min_indent = min(len(line) - len(line.lstrip()) for line in lines if line.strip())

    # This for loop assigns the indent_level variable to the number of indentations in the line
    for line in lines:
        indent_level = (len(line) - len(line.lstrip()) - min_indent) // len(indent_char) + 1
        formatted_line = line.strip()

        # Ignore lines containing patterns specified by the user
        if any(pattern in formatted_line for pattern in omit_patterns):
            continue

        if indent_level == 0:
            formatted_lines.append(last_indent_char + formatted_line)
        else:
            formatted_lines.append(indent_char * (indent_level - 1) + last_indent_char + formatted_line)

    formatted_tree = '\n'.join(formatted_lines)
    print("format_tree: " + formatted_tree)
    return formatted_tree



    ###
    ## Converted into a for loop so I can print the values as the loop above is a generator expression, which is good for memory but not for debugging
    # min_indent = None
    # for line in lines:
    #     if line.strip():
    #         stripped_line = len(line) - len(line.lstrip())
    #         print(f"Current line stripped length: {stripped_line}")
    #         if min_indent is None or stripped_line < min_indent:
    #             min_indent = stripped_line
    #         print(f"Current min_indent: {min_indent}")

    # print(f"Final min_indent: {min_indent}")
    ###

    # This for loop assigns the indent_level variable to the number of indentations in the line

# Get the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Define the path to the PowerShell script
script_path = os.path.join(current_dir, "powershell_tree_generator.ps1")

# Execute the PowerShell script
subprocess.run(["pwsh-preview", "-File", script_path])

# Execute the PowerShell script
powershell_output = subprocess.run(['pwsh-preview', '-File', script_path], capture_output=True, text=True).stdout

# Remove the line capturing the output of the PowerShell command
# powershell_output = subprocess.run(['pwsh-preview', '-File', './my_first_script.ps1'], capture_output=True, text=True).stdout

done = False

# Pass the actual output of the PowerShell command to the format_tree function
formatted_tree = format_tree(powershell_output)

# Rest of the code remains the same...


# the command to execute in PowerShell is an array of strings
command = [
    "pwsh-preview", # this is the PowerShell executable command
    "-Command", # this tells PowerShell that the next string will be the command to execute
    r'$formatted_tree = """' + formatted_tree + '"""\n', # here we define a variable in PowerShell called $formatted_tree and assign it the value of the formatted tree
    "$formatted_tree" # this is the command to print the value of the $formatted_tree variable
]

# Execute PowerShell command
# Here the run method is used instead of the check_output method because the check_output method will raise an exception if the PowerShell command returns a non-zero exit code
# so the run method is called on the subprocess object instead and the output is captured in the stdout attribute to be used later bound to the output variable
output = subprocess.run(command, capture_output=True, text=True, input=powershell_output).stdout

# Create a markdown file with the formatted tree

# Let the user choose the name of the file:
name_of_file = input("What do you want to name the file? \n")
# with tells Python to open the file and close it when the block ends, open tells Python to open the file in write mode, and the "w" argument tells Python to open the file in write mode

with open(name_of_file, "w") as f:
    f.write(formatted_tree) # write the formatted tree to the file

# Print PowerShell output
print(output)
