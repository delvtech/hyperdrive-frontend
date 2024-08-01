# %%
## Preamble

# Imports
from __future__ import annotations

import json
import os

import matplotlib as mpl
import requests
from dotenv import load_dotenv
from matplotlib import pyplot as plt

# Plot settings
font_settings = {
        "text.usetex": True,
        "font.family": "serif",
}
mpl.rcParams.update(font_settings)


# Helper functions
def parse_response(response: requests.Response) -> dict:
  if not response.status_code == 200:
    raise AssertionError(f"Request failed with status code {response.status_code}.")
  json_content = json.loads(response.content)
  if not isinstance(json_content, dict):
    raise AssertionError(f"{json_content=} is not a dict.")
  if "results" not in json_content.keys():
    raise AssertionError(f"'results' not in {json_content.keys()=}.")
  # Parse the response
  data = json_content["results"]
  return data

def get_timeseries_data(
    domain: str,
    period: str | None = None,
    metrics: str | None = None,
    filters: str | None = None
):
  # App and auth data
  api_url = "https://plausible.io/api/v1/stats"
  plausible_token = os.getenv("PLAUSIBLE_TOKEN")
  endpoint = "timeseries"
  # Make a request
  request_url = f"{api_url}/{endpoint}/?site_id={domain}"
  if period is not None: request_url += f"&period={period}"
  if filters is not None: request_url += f"&filters={filters}"
  if metrics is not None: request_url += f"&metrics={metrics}"
  header = {"Authorization": "Bearer "+ plausible_token}
  # Return the result or throw an error
  return parse_response(requests.get(request_url, headers=header))

def get_breakdown_data(
    domain: str,
    property: str,
    period: str | None = None,
    metrics: str | None = None,
    filters: str | None = None
):
  # App and auth data
  api_url = "https://plausible.io/api/v1/stats"
  plausible_token = os.getenv("PLAUSIBLE_TOKEN")
  endpoint = "breakdown"
  # Make a request
  request_url = f"{api_url}/{endpoint}/?site_id={domain}"
  request_url += f"&property={property}"
  if period is not None: request_url += f"&period={period}"
  if metrics is not None: request_url += f"&metrics={metrics}"
  if filters is not None: request_url += f"&filters={filters}"
  header = {"Authorization": "Bearer "+ plausible_token}
  # Return the result or throw an error
  return parse_response(requests.get(request_url, headers=header))

# Constants
load_dotenv(".env")
domains = [
  "app.hyperdrive.box",
  "hyperdrive.box",
  "docs-delv.gitbook.io/hyperdrive",
]

# %%
## Visitors over time

period = "7d"
metric = "visitors"
data = {
  domain: get_timeseries_data(domain=domain, period=period, metrics=metric)
  for domain in domains
}

fig, ax = plt.subplots(1, 1)
for idx, domain in enumerate(domains):
  x_data = [datapoint["date"] for datapoint in data[domain]]
  y_data = [datapoint[metric] for datapoint in data[domain]]
  ax.plot(x_data, y_data, label=domain)
ax.tick_params(axis="x", labelrotation=30)
ax.set_title("visitors over time")
ax.set_ylabel("visitors")
ax.set_xlabel("date")
fig.tight_layout()
fig.legend(
  fontsize="small",
  loc="upper center",
  bbox_to_anchor=(0.5, -0.001),
  ncol=len(domains)
)

plt.show()

# %%
## USA visitors over time 
metric = "visitors"
filter = "visit:country%3D%3DUS"
data = {
  domain: get_timeseries_data(domain=domain, period=period, metrics=metric, filters=filter)
  for domain in domains
}

fig, ax = plt.subplots(1, 1)
for idx, domain in enumerate(domains):
  x_data = [datapoint["date"] for datapoint in data[domain]]
  y_data = [datapoint[metric] for datapoint in data[domain]]
  ax.plot(x_data, y_data, label=domain)
ax.tick_params(axis="x", labelrotation=30)
ax.set_title("USA visitors over time")
ax.set_ylabel("USA visitors")
ax.set_xlabel("date")
fig.tight_layout()
fig.legend(
  fontsize="small",
  loc="upper center",
  bbox_to_anchor=(0.5, -0.001),
  ncol=len(domains)
)

plt.show()

# %%