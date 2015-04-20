# Contributing

## Adding a new translation

1. Fork the repository on GitHub account by clicking the **Fork** button
2. Clone your fork on your machine (feel free to go over SSH)
    
    ```
    $ git clone https://github.com/<USERNAME>/sass-guidelines
    ```

3. Put yourself on the `gh-pages` branch
    
    ```
    $ git checkout gh-pages
    ```

4. Create a new branch named after your language short code (e.g. `en` for English)
    
    ```
    $ git checkout -b <LANGUAGE>
    ```

5. Copy the `en/` folder and rename it after your language
    
    ```
    $ cp -r en/ <LANGUAGE>/
    ``` 

6. In this folder, add a file named `index.md` containing:
    
    ```
    ---
    layout: default
    language: <LANGUAGE>
    ---

    {% include chapters.html %}
    ```

7. Translate one file at a time in your language's folder (be sure not to edit Liquid includes)
8. Once you are done with the translation, make sure your branch is up-to-date with the `gh-pages` branch
    
    ```
    $ git fetch
    $ git rebase origin/gh-pages
    ```

    If there is a conflict (which is highly unlikely), resolve it, add the file (`git add <FILE(S)>`) and continue the rebase (`git rebase --continue`) until there is no more conflict.

9. Push your branch to your fork
    
    ```
    $ git push origin <LANGUAGE>
    ```

10. Go on GitHub, and submit a pull-request from your branch to the `gh-pages` on the original repository

## Updating an existing translation

1. Fork the repository on GitHub account by clicking the **Fork** button
2. Clone your fork on your machine (feel free to go over SSH)
    
    ```
    $ git clone https://github.com/<USERNAME>/sass-guidelines
    ```

3. Put yourself on the `gh-pages` branch
    
    ```
    $ git checkout gh-pages
    ```

4. Create a new branch named after your language short code + the version (e.g. `fr-1.1.0` to update the French version to 1.1.0)
    
    ```
    $ git checkout -b <LANGUAGE>-<VERSION>
    ```

5. In your language's folder, update what needs to be updated
6. Once you are done with the update, make sure your branch is up-to-date with the `gh-pages` branch
    
    ```
    $ git fetch
    $ git rebase origin/gh-pages
    ```

    If there is a conflict (which is highly unlikely), resolve it, add the file (`git add <FILE(S)>`) and continue the rebase (`git rebase --continue`) until there is no more conflict.
    

7. Push your branch to your fork
    
    ```
    $ git push origin <LANGUAGE>-<VERSION>
    ```

8. Go on GitHub, and submit a pull-request from your branch to the `gh-pages` on the original repository
