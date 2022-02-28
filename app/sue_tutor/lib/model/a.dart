// To parse this JSON data, do
//
//     final globalPreference = globalPreferenceFromJson(jsonString);

import 'dart:convert';

import 'package:flutter/material.dart';

GlobalPreference globalPreferenceFromJson(String str) =>
    GlobalPreference.fromJson(json.decode(str));

String globalPreferenceToJson(GlobalPreference data) =>
    json.encode(data.toJson());

class GlobalPreference {
  GlobalPreference({
    required this.theme,
  });

  List<Theme> theme;

  factory GlobalPreference.fromJson(Map<String, dynamic> json) =>
      GlobalPreference(
        theme: List<Theme>.from(json["theme"].map((x) => Theme.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "theme": List<dynamic>.from(theme.map((x) => x.toJson())),
      };
}

class Theme {
  Theme({
    required this.name,
    required this.color,
    required this.brightness,
  });

  String name;
  String color;
  Brightness brightness;

  factory Theme.fromJson(Map<String, dynamic> json) => Theme(
        name: json["name"],
        color: json["color"],
        brightness:
            json["brightness"] == "light" ? Brightness.light : Brightness.dark,
      );

  Map<String, dynamic> toJson() => {
        "name": name,
        "color": color,
        "brightness": brightnessValues.reverse[brightness],
      };
}

final brightnessValues =
    EnumValues({"light": Brightness.light, "dark": Brightness.dark});

class EnumValues<T> {
  Map<String, T> map;
  late Map<T, String> reverseMap;

  EnumValues(this.map);

  Map<T, String> get reverse {
    if (reverseMap == null) {
      reverseMap = map.map((k, v) => new MapEntry(v, k));
    }
    return reverseMap;
  }
}
