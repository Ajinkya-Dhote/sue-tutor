import 'package:flutter/material.dart';
import 'package:sue_tutor/service/locale_preference.dart';

class LocaleModel extends ChangeNotifier {
  Locale _selectedLocale = const Locale('en', 'IN');
  late LocalePreference _localePreference;

  LocaleModel() {
    _localePreference = LocalePreference();
    getPreferedLocale();
  }

  getAppLoacele() {
    return _selectedLocale;
  }

  getPreferedLocale() async {
    await _localePreference
        .getLocale()
        .then((value) => {_selectedLocale = value});
    notifyListeners();
  }

  setAppLocale(locale) {
    _selectedLocale = locale;
    _localePreference.setLocale(_selectedLocale.languageCode);
    notifyListeners();
  }
}
