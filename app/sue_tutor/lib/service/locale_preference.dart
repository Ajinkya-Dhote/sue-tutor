import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LocalePreference {
  static const locale = "locale";

  setLocale(String selectedLocale) async {
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    sharedPreferences.setString(locale, selectedLocale);
  }

  Future<Locale> getLocale() async {
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    String? preferedLocale = sharedPreferences.getString(locale);
    preferedLocale ??= 'en';
    return Locale(preferedLocale, '');
  }
}
