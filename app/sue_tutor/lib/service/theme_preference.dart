import 'package:flutter/cupertino.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ThemePreferences {
  static const themeColor = "theme_color";
  static const colorBrightness = "color_brightness";
  static const colorName = "color_name";

  setTheme(int color, bool isDark, String name) async {
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    sharedPreferences.setInt(themeColor, color);
    sharedPreferences.setBool(colorBrightness, isDark);
    sharedPreferences.setString(colorName, name);
  }

  Future<Map<String, Object?>> getTheme() async {
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    bool? isDark = sharedPreferences.getBool(colorBrightness);
    var theme = {
      "color": sharedPreferences.getInt(themeColor),
      "brightness": (isDark != null && isDark == true)
          ? Brightness.dark
          : Brightness.light,
      "name": sharedPreferences.getString(colorName),
    };
    return theme;
  }
}
