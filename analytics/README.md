# FE Plausible analytics

## Install

Create a Python environment:

```sh
cd <repo_location>
pyenv install 3.10
pyenv local 3.10
python -m venv --upgrade-deps .venv
source .venv/bin/activate
```

Install the rqeuirements:

```sh
pip install -r analytics/requirements.txt
```

Copy `analytics/.env.example` to `analytics/.env` and assign the plausible API
key to the `PLAUSIBLE_TOKEN` variable.

Now you can open `analytics/analytics_example.py` in VSCode and run the cells.