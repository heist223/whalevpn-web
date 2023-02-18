from pynput import keyboard

import glob
from bs4 import BeautifulSoup

def func():

    filenames = []

    def get_files(start):
        files = glob.glob(start)
        for file in files:
            if ("." not in file):
                get_files(file + "/*")
            else:
                filenames.append(file)

    get_files("public/html/*")

    for filename in filenames:
        if ("prod" in filename): continue
        HTMLFile = open(filename, "r", encoding='utf-8')
        
        index = HTMLFile.read()
        Parse = BeautifulSoup(index, 'lxml')
        str_parse = str(Parse)

        scripts = Parse.find_all("script")

        for script in scripts:
            try:
                src = "public/" + script['src'].replace("../", "")
                if ("https://" in src): continue
                SRCFile = open(src, "r", encoding='utf-8')
                content = SRCFile.read()
                str_parse = str_parse.replace(str(script), "\n<script>\n" + content + "\n</script>\n")
            except:
                pass
        
        links = Parse.find_all("link")

        style = ''

        for link in links:
            try:
                href = "public/" + link['href'].replace("../", "")
                if ("https" in href): continue
                SRCFile = open(href, "r", encoding='utf-8')
                content = SRCFile.read()
                style += content + "\n"
                str_parse = str_parse.replace(str(link) + "\n", "")
            except:
                pass

        str_parse = str_parse.replace("</body>", "</body>\n<style id='style'>\n" + style + "\n</style>\n")

        with open(filename.replace("debug", "prod"), "w", encoding='utf-8') as f:
            f.write(str_parse)
            f.close()

    print("done")

def on_press(key):
    try:
        k = key.char
    except:
        k = key.name
    if k == "ctrl":
        func()

print("start listening")
listener = keyboard.Listener(on_press=on_press)
listener.start()  
listener.join() 