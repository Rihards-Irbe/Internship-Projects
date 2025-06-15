from city_locator_client import CityLocatorClient as city_client
from geolocator_client import GeolocatorClient as geolocator_client
from weather_info import WeatherInfo

def validate_latitude(latitude):
    try:
        float_latitude = float(latitude)
        return -90 <= float_latitude <= 90
    except ValueError:
        return False

def validate_longitude(longitude):
    try:
        float_longitude = float(longitude)
        return -180 <= float_longitude <= 180
    except ValueError:
        return False

running = True

while running:
    print("Options:")
    print("1: Get Weather Data Based Off Of Latitude And Longitude")
    print("2: Get Weather Data Based Off Of Locations Name")
    print("3: Get Citys Name Based Off Of Longitude and Latitude")
    print("Type 'end' to exit")

    option = input("Enter your choice (1-3): ")

    if option == '1':
        latitude = input("Latitude: ")
        longitude = input("Longitude: ")

        if validate_latitude(latitude=latitude) and validate_longitude(longitude=longitude):
            
            geo_locator = geolocator_client()
            response = geo_locator.fetch_weather_data_from_coordinates(longitude=longitude, latitude=latitude)

            if(response.status_code == 200):
                weather_data = response.json()
                print("<==========================================>")
                print("Weather Data For Latitude: " + latitude + " And Longitude: " + longitude)

                weather_info = WeatherInfo(weather_data['current']['temperature_2m'], weather_data['current']['wind_speed_10m'], weather_data['current']['wind_direction_10m'], weather_data['current_units']['temperature_2m'], weather_data['current_units']['wind_speed_10m'], weather_data['current_units']['wind_direction_10m'])
                print(weather_info.__str__())

                print("<==========================================>")
            else:
                print("Status Code:", response.status_code)
        else:
            print("Invalid latitude or longitude. Please enter a valid float value.")

    elif option == '2':
        location_name = input("Enter location name: ")

        city_locator = city_client()
        response = city_locator.fetch_city_data_from_address(address=location_name)

        if(response.status_code == 200):

            location_data = response.json()
            latitude = location_data[0]['lat']
            longitude = location_data[0]['lon']
        else:
            print("Status Code:", response.status_code)

        geo_locator = geolocator_client()
        response = geo_locator.fetch_weather_data_from_coordinates(latitude=latitude, longitude=longitude)
                
        if(response.status_code == 200):
            weather_data = response.json()
            print("<==========================================>") #create class WeatherData, kas saturēs visus mainīgos un paskatītos, kā pārrakstīt string metodi __str__
            print("Weather Data For Location: " + location_name.capitalize() + " With Latitude: " + latitude + " And Longitude: " + longitude)

            weather_info = WeatherInfo(weather_data['current']['temperature_2m'],
                                       weather_data['current']['wind_speed_10m'],
                                       weather_data['current']['wind_direction_10m'],
                                       weather_data['current_units']['temperature_2m'],
                                       weather_data['current_units']['wind_speed_10m'],
                                       weather_data['current_units']['wind_direction_10m'])
            print(weather_info.__str__())

            print("<==========================================>")
        else:
            print("Status Code:", response.status_code)

    elif option == '3':
        latitude = input("Latitude: ")
        longitude = input("Longitude: ")

        if validate_latitude(latitude=latitude) and validate_longitude(longitude=longitude):

            city_locator = city_client()
            response = city_locator.fetch_city_data_from_coordinates(latitude=latitude, longitude=longitude)

            if(response.status_code == 200):
                city_data = response.json()
                if 'error' in city_data:
                    print("Error:", city_data['error'])
                else:
                    print("Location: " + city_data['display_name'])
            else:
                    print("Status Code:", response.status_code)
        else:
            print("Invalid latitude or longitude. Please enter a valid float value.")
    elif option.lower() == 'end':
        running = False
    else:
        print("Invalid option. Please enter a number between 1 and 3.")
