use std::fs;
use std::io::{self, Read};

pub fn read_file_content(file_path: &str) -> io::Result<String> {
    fs::read_to_string(file_path)
}