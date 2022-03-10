import 'dart:async';
import 'dart:convert';

import 'package:sue_tutor/model/a.dart';
import 'package:sue_tutor/service/preference.dart';
import 'package:http/http.dart' as http;

class PreferenceServiceImpl implements PreferenceService {
  @override
  Future<GlobalPreference> fetchGlobalPreference() async {
    final response = await http.get(Uri.parse('http://192.168.1.18:8080/'));

    if (response.statusCode == 200) {
      final parsed = json.decode(response.body);
      return GlobalPreference.fromJson(parsed);
    } else {
      throw Exception('Failed to load preference');
    }
  }
}
