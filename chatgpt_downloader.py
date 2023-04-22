from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

def download_chat(url):
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")  # Run Chrome in headless mode (i.e., without a GUI)
    options.add_argument("--disable-gpu")  # Disable GPU acceleration to prevent certain errors

    # Use the ChromeDriverManager to download the Chromedriver executable if not found on the system
    driver_path = ChromeDriverManager().install()

    # Create a new Chrome WebDriver instance with the specified options
    driver = webdriver.Chrome(executable_path=driver_path, options=options)

    # Navigate to the provided URL
    driver.get(url)

    # Get the chat text from the webpage and save it to a file
    chat_text = driver.find_elements(".chatlog-wrapper .chatlog").text
    with open("chat.txt", "w") as f:
        f.write(chat_text)

    # Close the WebDriver instance
    driver.quit()

    print("Chat downloaded successfully.")

if __name__ == "__main__":
    url = "https://chat.openai.com/c/0da689f4-acb7-4f1d-bdb9-c276e897a472"
    download_chat(url)
