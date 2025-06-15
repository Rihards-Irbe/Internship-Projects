import requests

class CityLocatorClient(object):

    def __init__(self):
        self.base_url = "https://geocode.maps.co"
        self.api_key = "my_api"

    def fetch_city_data_from_address(self, address):

        return requests.get(self.base_url + "/search?q=" + address + "&api_key=" + self.api_key)
    
    def fetch_city_data_from_coordinates(self, latitude, longitude):
        
        return requests.get(self.base_url + "/reverse?lat=" + latitude + "&lon=" + longitude + "&api_key=" + self.api_key)

    