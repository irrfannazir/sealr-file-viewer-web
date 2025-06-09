import os

file = open("scripts/fileManager/dir.js", "w")
b = True

def list_all_entries(directory):
    try:
        entries = os.listdir(directory)
        return entries
    except FileNotFoundError:
        print("Directory not found.", directory)
        return []
    except PermissionError:
        print("Permission denied.")
        return []

def is_folder(dir):
    return os.path.isdir(dir)


def scrap_the_path(relative_path = "assets/file"):
    global b
    current_directory = os.path.abspath(relative_path)
    scanned_dirs = list_all_entries(current_directory)
    
    if relative_path == "assets/file":
        false_path = "root"
    else:
        false_path = os.path.basename(relative_path)
    
    if b == True:
        file.write("\n\t\""+false_path+"\" : [")
        b = False
    else:
        file.write(",\n\t\""+false_path+"\" : [")
    
    a = True
    for name in scanned_dirs:
        name_path = os.path.join(current_directory, name)
        if is_folder(name_path):
            if a == True:
                file.write("\"f"+name+"\"")
                a = False
            else:
                file.write(", \"f"+name+"\"")
        else:
            if a == True:
                file.write("\"d"+name+"\"")
                a = False
            else:
                file.write(", \"d"+name+"\"")
    file.write("]")
    
    for name in scanned_dirs:
        name_path = os.path.join(current_directory, name)
        if is_folder(name_path):
            scrap_the_path(name_path)

file.write("export const dirs = {")
scrap_the_path()
file.write("\n}")
file.close()
print("Folders written to directory.js")