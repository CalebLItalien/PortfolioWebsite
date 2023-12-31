#!/bin/sh
# Does setup for the site

# Introduction
echo "\n"
echo "Hello there! I'm happy you've decided to build a personal website. Please follow these steps to build your website."

# Requirements
echo "\n"
echo "Requirements for the Project:"
echo "1. Docker - Ensure you have installed the Docker daemon and have it running. It can be installed at this link: https://www.docker.com/products/docker-desktop/"
echo "2. Internet connection - To download packages and dependencies."
echo "3. Your name"
echo "4. A headshot"
echo "5. A brief description of yourself"
echo "6. A GitHub link"
echo "7. A LinkedIn link"
echo "8. The names of companies you've worked at (which you want displayed)"
echo "9. The logos of those companies"
echo "10. Descriptions of what you did at those companies"
echo "11. The programming languages you have at least beginner level experience with"
echo "12. The names of frameworks and libraries you know"
echo "13. The names of technologies you know"
echo "14. Icons for the languages, frameworks, and technologies you know, with 
    transparent backgrounds"
echo "15. The titles of projects you've worked on"
echo "16. Links to the projects you've worked on"
echo "17. Descriptions of the projects you've worked on"
echo "18. A pdf of your resume"
echo "19. An SMTP Server name, username, and password - see SMTP.md for more information"
echo "20. A no reply email and a personal email"

# NEED TO ADD COMPANY LINKS AND COMPANY TIME PERIODS and company titles

# Acknowledge Requirements
echo "\n"
while true; do
    read -p "Phew! that's quite a lot. But it'll all be worth it! Do you have all these? Y (yes) or N (no): " yn
    case $yn in 
        [Yy]* ) break;;
        [Nn]* ) echo "Please make sure you have all the requirements before proceeding."; exit;;
        * ) echo "Please answer yes (Y) or no (N)"
    esac
done

echo "Great! Let's continue"

# Name
read -p "Please enter your name: " userName
echo "$userName" > ./frontend/public/name.txt

# Headshot
echo "Please open frontend -> src -> assets -> headshot."
echo "Then, place a 'headshot.png' file there. It must be named exactly 'headshot.png'."
read -n1 -p "Press any key to continue after you have completed this step."

# Bio
read -p "Please enter a brief description of yourself" userDescription
echo  "$userDescription" > ./frontend/public/bio.txt

# GitHub Link
read -p "Please enter a GitHub link (ie: https://github.com/exampleUser)" gitLink
echo "$gitLink" > ./frontend/public/github.txt

# LinkedIn Link
read -p "Please enter a LinkedIn link (ie: https://www.linkedin.com/in/exampleUser/" liLink
echo "$liLink" > ./frontend/public/linkedin.txt

# Company Names
echo "Enter the names of the companies one by one. Type '*' and press Enter when you're done."
while true; do
    read -p "Enter a company name (or '*' if done):" companyName
    if ["$companyName" = "*"]; then 
        break
    else 
        echo "$companyName" >> ./frontend/public/companies.txt
    fi
done

# Company Logos
echo "Please open frontend -> src -> assets -> companies."
echo "Then, for each company you just entered, place a {companyName}.png file as its logo."
echo "The file name should be all lowercase, with spaces and special characters removed or replaced."
echo "For example:"
echo "  - If you worked at 'Example Company AbC LLC.', the file would be 'examplecompanyabcllc.png'"
echo "  - If you worked at 'My Company, Inc.', the file would be 'mycompanyinc.png'"
read -n1 -p "Press any key to continue after you have completed this step."

# Company Descriptions
echo "Enter descriptions of what you did at those companies one by one. Type '*' and press Enter when you're done."
echo "You must enter the descriptions in the exact same order you entered the names of the companies."
echo "If you want to view the list of companies you entered, type '*show' and press Enter."
while true; do
    read -p "Enter a company description (or '*' if done, '*show' to view companies): " companyDescription
    if [ "$companyDescription" = "*" ]; then
        break
    elif [ "$companyDescription" = "*show" ]; then
        echo "List of Companies:"
        cat ./frontend/public/companies.txt
        echo "\nContinue entering company descriptions."
    else
        echo "$companyDescription" >> ./frontend/public/companyDescriptions.txt
    fi
done

# Programming Language
echo "Enter the names of programming languages you have at least beginnner level experience with."
echo "For each language, first, type its name, press Enter, and then enter your expertise level (B/I/A)."
while true; do
    read -p "Enter a programming language (or '*' if finished):" language
    if [ "$language" = "*" ]; then
        break
    else
        read -p "Enter your expertise level, as B (for Beginner), I (for Intermediate) or A(for Advanced): " expertise
        case "$expertise" in
            B|I|A)
                case "$expertise" in 
                    B) expertise="Beginner" ;;
                    I) expertise="Intermediate" ;;
                    A) expertise="Advanced" ;;
                esac
                echo "$language $expertise" >> ./frontend/public/languages.txt
                ;;
            *)
                echo "Invalid expertise level. Please enter B, I, or A."
                ;;
        esac
    fi
done

# Frameworks and Libraries
echo "Enter the names of frameworks and libraries you have at least beginnner level experience with."
echo "For each tool, first, type its name, press Enter, and then enter your expertise level (B/I/A)."
while true; do
    read -p "Enter a tool (or '*' if finished):" tool
    if [ "$tool" = "*" ]; then
        break
    else
        read -p "Enter your expertise level, as B (for Beginner), I (for Intermediate) or A(for Advanced): " expertise
        case "$expertise" in
            B|I|A)
                case "$expertise" in 
                    B) expertise="Beginner" ;;
                    I) expertise="Intermediate" ;;
                    A) expertise="Advanced" ;;
                esac
                echo "$tool $expertise" >> ./frontend/public/frameworksLibraries.txt
                ;;
            *)
                echo "Invalid expertise level. Please enter B, I, or A."
                ;;
        esac
    fi
done

# Technologies 
echo "Enter the names of technologies you have at least beginnner level experience with."
echo "For each technology, first, type its name, press Enter, and then enter your expertise level (B/I/A)."
while true; do
    read -p "Enter a technology (or '*' if finished):" technology
    if [ "$technology" = "*" ]; then
        breaks
    else
        read -p "Enter your expertise level, as B (for Beginner), I (for Intermediate) or A(for Advanced): " expertise
        case "$expertise" in
            B|I|A)
                case "$expertise" in 
                    B) expertise="Beginner" ;;
                    I) expertise="Intermediate" ;;
                    A) expertise="Advanced" ;;
                esac
                echo "$technology $expertise" >> ./frontend/public/technologies.txt
                ;;
            *)
                echo "Invalid expertise level. Please enter B, I, or A."
                ;;
        esac
    fi
done

# Technology Icons
echo "Please open frontend -> src -> skills."
echo "For each language, framework/library, and technology you entered, place a technology.png file."
echo "The file name should be all lowercase, with spaces deleted and all special characters replaced by corresponding words."
echo "For example:"
echo "  - If you know C#, the file would be 'csharp.png'"
echo "  - if you know Visual Basic, the file would be 'visualbasic.png'"
read -n1 p "Press any key to continue after you have completed this step."

echo "Please open frontend -> src -> assets -> companies."
echo "Then, for each company you just entered, place a {companyName}.png file as its logo."
echo "The file name should be all lowercase, with spaces and special characters removed or replaced."
echo "For example:"
echo "  - If you worked at 'Example Company AbC LLC.', the file would be 'examplecompanyabcllc.png'"
echo "  - If you worked at 'My Company, Inc.', the file would be 'mycompanyinc.png'"
read -n1 -p "Press any key to continue after you have completed this step."

# Project Titles
echo "Enter your project titles one by one. Type '*' and press Enter when you're done."
while true; do
    read -p "Enter a project link (or '*' if done):" projectTitle
    if [ "$projectTitle" = "*" ]; then
        break
    else
        echo "$projectTitle" >> ./frontend/public/projectLinks.txt
    fi
done

# Project Links
echo "Enter links to your projects one by one. Type '*' and press Enter when you're done."
echo "You must enter the links in the exact same order you entered the projects' titles."
echo "If you want to view the list of projects you entered, type '*show' and press Enter."
while true; do
    read -p "Enter a project link (or '*' if done, '*show' to view titles): " projectLink
    if [ "$projectLink" = "*" ]; then
        break
    elif [ "$projectLink" = "*show" ]; then
        echo "List of Projects:"
        cat ./frontend/public/projectNames.txt
        echo "\nContinue entering project links."
    else
        echo "$projectLink" >> ./frontend/public/projectLinks.txt
    fi
done

# Project Descriptions
echo "Enter descriptions of your projects one by one. Type '*' and press Enter when you're done."
echo "You must enter the descriptions in the exact same order you entered the projects' titles."
echo "If you want to view the list of projects you entered, type '*show' and press Enter."
while true; do
    read -p "Enter a project link (or '*' if done, '*show' to view titles): " projectDes
    if [ "$projectDes" = "*" ]; then
        break
    elif [ "$projectDes" = "*show" ]; then
        echo "List of Projects:"
        cat ./frontend/public/projectNames.txt
        echo "\nContinue entering project links."
    else
        echo "$projectDes" >> ./frontend/public/projectLinks.txt
    fi
done
# PDF of Resume
echo "Please open frontend -> public."
echo "Then, place a 'resume.pdf' file there. It must be named exactly 'resume.pdf'."
read -n1 -p "Press any key to continue after you have completed this step."

# SMTP Setup
ENV_PATH="./api/.env"
read -p "Please enter your SMTP Server name: " smtpServer
KEY="SMTP_SERVER"
VALUE="$smtpServer"

if grep -q "^KEY=" "$ENV_PATH"; then
    sed -i "s/^KEY=.*/$KEY=$VALUE/" "$ENV_PATH"
else
    echo "$KEY=$VALUE" >> "$ENV_PATH"
fi

read -p "Please enter your SMTP Username: " smtpUser
KEY="SMTP_USERNAME"
VALUE="$smtpUser"

if grep -q "^KEY=" "$ENV_PATH"; then
    set -i "s/^KEY=.*/$KEY=$VALUE/" "$ENV_PATH"
else
    echo "$KEY=$VALUE" >> "$ENV_PATH"
fi

read -p "Please enter your SMTP Password: " smtpPassword
KEY="SMTP_PASSWORD"
VALUE="$smtpPassword"

if grep -q "^KEY=" "$ENV_PATH"; then
    sed -i "s/^KEY=.*/$KEY=$VALUE/" "$ENV_PATH"
else
    echo "$KEY=$VALUE" >> "$ENV_PATH"
fi

read -p "Please enter your no reply email: " noReply
KEY="NO_REPLY_EMAIL"
VALUE="$noReply"

if grep -q "^KEY=" "$ENV_PATH"; then
    sed -i "s/^KEY=.*/$KEY=$VALUE/" "$ENV_PATH"
else
    echo "$KEY=$VALUE" >> "$ENV_PATH"
fi

read -p "Please enter your inbox email: " inbox
KEY="INBOX_EMAIL"
VALUE="$inbox"

if grep -q "^KEY=" "$ENV_PATH"; then 
    sed -i "s/^KEY=.*/$KEY=$VALUE/" "$ENV_PATH"
else    
    echo "$KEY=$VALUE" >> "$ENV_PATH"
fi