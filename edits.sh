#!/bin/sh
# Does edits if necessary to various sections, using flags

show_help() {
    echo "Usage: $0 [OPTION]"
    echo "This script helps you do edits, without having to restart the setup script."
    echo "Available options: "
    echo "  --help      Display this help and exit"
    echo "  --name      Edit your name"
    echo "  --bio       Edit your description"
    echo "  --gitHub    Edit your GitHub link"
    echo "  --linkedIn  Edit your LinkedIn link"
    echo "  --cNames    Edit your company names"
    echo "  --cDescs    Edit your company descriptions"
    echo "  --pLang     Edit your programming languages"
    echo "  --frame     Edit your frameworks/libraries"
    echo "  --tech      Edit your technologies"
    echo "  --pTitles   Edit your project titles"
    echo "  --pLinks    Edit your project links"
    echo "  --pDescs    Edit your project descriptions"
    echo "  --smtp      Edit your smtp information"
    echo "  --emails    Edit your email information"
}

if [ $# -eq 0 ]; then
    show_help
    exit 1
fi

case $1 in 
    --help)
        show_help
        ;;
    --name)
        ;;
    --bio)
        ;;
    --gitHub)
        ;;
    --linkedIn)
        ;;
    --cNames)
        ;;
    --cDescs)
        ;;
    --pLang)
        ;;
    --frame)
        ;;
    --tech)
        ;;
    --pTitles)
        ;;
    --pLinks)
        ;;
    --pDescs)
        ;;
    --smtp)
        ;;
    --emails)
        ;;
    *)
        echo "Error: Invalid option."
        show_help
        exit 1
        ;;
esac
