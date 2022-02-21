import 'package:flutter/material.dart';
import 'package:sue_tutor/service/theme_preference.dart';

class ThemeModel extends ChangeNotifier {
  late int _color;
  late Brightness _brightness;
  late String _name;
  late bool _isDark;
  late ThemePreferences _preferences;
  // late ColorScheme _currentTheme;
  Brightness get isDark => _brightness;

  ThemeModel() {
    _color = 0xffE0F2F1;
    _brightness = Brightness.light;
    _name = "Teal";
    _preferences = ThemePreferences();
    getPreferences();
  }

  setTheme(int color, Brightness brightness, String name) {
    var isDark = brightness == Brightness.dark ? true : false;
    _color = color;
    _brightness = brightness;
    _name = name;
    _preferences.setTheme(color, isDark, name);
    notifyListeners();
  }

  set isDark(Brightness brightness) {
    _brightness = brightness;
    var isDark = brightness == Brightness.dark ? true : false;
    _preferences.setTheme(_color, isDark, _name);
    notifyListeners();
  }

  getTheme() {
    return ColorScheme.fromSeed(
        seedColor: Color(_color), brightness: _brightness);
  }

  getPreferences() async {
    await _preferences.getTheme().then((theme) => {
          _color = theme['color'] == null ? _color : theme['color'] as int,
          _brightness = theme['brightness'] == null
              ? _brightness
              : theme['brightness'] as Brightness,
          _name = theme['name'] == null ? _name : theme['name'] as String
        });
    notifyListeners();
  }
}
