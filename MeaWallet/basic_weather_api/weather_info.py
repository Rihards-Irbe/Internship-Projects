class WeatherInfo(object):

    def __init__(self, temperature_2m, wind_speed_10m, wind_direction_10m, temperature_2m_unit, wind_speed_10m_unit,  wind_direction_10m_unit):
        self.temperature_2m = temperature_2m
        self.wind_speed_10m = wind_speed_10m
        self.wind_direction_10m = wind_direction_10m
        self.temperature_2m_unit = temperature_2m_unit
        self.wind_speed_10m_unit = wind_speed_10m_unit
        self.wind_direction_10m_unit = wind_direction_10m_unit

    def __str__(self):
            data = f" Temperature (2m): {self.temperature_2m} {self.temperature_2m_unit} \n Wind Speed (10m): {self.wind_speed_10m} {self.wind_speed_10m_unit} \n Wind Direction (10m): {self.wind_direction_10m} {self.wind_direction_10m_unit}"
            return data
