import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:provider/provider.dart';
import 'package:sue_tutor/model/a.dart';
import 'package:sue_tutor/model/theme_model.dart';
import 'package:sue_tutor/service/preference_service_impl.dart';

class Demo extends StatefulWidget {
  const Demo({Key? key}) : super(key: key);

  @override
  _DemoState createState() => _DemoState();
}

class _DemoState extends State<Demo> {
  late List<ListTile> themeColor = [];
  @override
  void initState() {
    super.initState();
    Future<GlobalPreference> pref =
        PreferenceServiceImpl().fetchGlobalPreference();
    EasyLoading.show(status: 'loading...');

    List<ListTile> tc = [];

    pref.then((p) => {
          tc = List<ListTile>.generate(
              p.theme.length,
              (int index) => ListTile(
                    leading: Icon(
                      Icons.circle,
                      color: Color(
                          int.parse("0xff${p.theme.elementAt(index).color}")),
                    ),
                    title: Text(p.theme.elementAt(index).name),
                    onTap: () => {
                      context.read<ThemeModel>().setTheme(
                          int.parse("0xff${p.theme.elementAt(index).color}"),
                          p.theme.elementAt(index).brightness,
                          "Blue Gray"),
                      // Navigator.of(context).pop()
                    },
                  ),
              growable: true),
          EasyLoading.dismiss(),
          setState(() => themeColor = tc),
        });
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeModel>(
        builder: (context, ThemeModel themeNotifier, child) {
      return Scaffold(
        appBar: AppBar(
          // title: Text(themeNotifier.isDark ? "Dark Mode" : "Light Mode"),
          title: Text(context.watch<ThemeModel>().isDark == Brightness.dark
              ? "Dark Mode"
              : "Light Mode"),
          actions: [
            IconButton(
                icon: Icon(themeNotifier.isDark == Brightness.dark
                    ? Icons.nightlight_round
                    : Icons.wb_sunny),
                onPressed: () {
                  themeNotifier.isDark = themeNotifier.isDark == Brightness.dark
                      ? Brightness.light
                      : Brightness.dark;
                })
          ],
        ),
        body: ListView(
          children: [...themeColor],
        ),
      );
    });
  }
}
