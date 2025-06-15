import requests

class GeolocatorClient(object):

    def __init__(self):
        self.base_url = "https://api.open-meteo.com/v1"

    def fetch_weather_data_from_coordinates(self, longitude, latitude):

        return requests.get(self.base_url + "/forecast?latitude="+ longitude + "&longitude=" + latitude + "&current=temperature_2m,wind_speed_10m,wind_direction_10m")