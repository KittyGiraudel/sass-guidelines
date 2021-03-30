# Contributing

## Getting started

1. Fork the repository on your GitHub account by clicking the **Fork** button
2. Clone your fork on your machine (feel free to go over SSH)

    ```
    $ git clone https://github.com/<USERNAME>/sass-guidelines
    ```

3. Create a new branch named after your language short code (e.g. `de` for German)

    ```
    $ git checkout -b <LANGUAGE>
    ```

## Translating the content

Read [TRANSLATING.md](TRANSLATING.md) to know more about this.

## Submitting your work

Once you are done with the translation, make sure your branch is up-to-date with the `main` branch.

```
$ git fetch
$ git rebase origin/master
```

If there is a conflict (which is unlikely but we never know), resolve it, add the file (`git add <FILE(S)>`) and continue the rebase (`git rebase --continue`) until there is no more conflict.

Then it is time to push your branch to your fork

```
$ git push origin <LANGUAGE>
```

Last but not least, go on GitHub, and submit a pull-request from your branch against the `main` of the original repository.
