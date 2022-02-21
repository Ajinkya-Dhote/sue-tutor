import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:sue_tutor/model/theme_model.dart';

class Demo extends StatefulWidget {
  const Demo({Key? key}) : super(key: key);

  @override
  _DemoState createState() => _DemoState();
}

class _DemoState extends State<Demo> {
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
        body: ListView.builder(itemBuilder: (BuildContext context, int index) {
          return Container(
            child: Card(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10)),
              child: Padding(
                padding: const EdgeInsets.all(12.0),
                child: Text(
                  "$index. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                  style: const TextStyle(fontSize: 14),
                ),
              ),
            ),
          );
        }),
        floatingActionButton: FloatingActionButton(
          onPressed: _openThemeSelector,
          tooltip: 'Increment',
          child: const Icon(Icons.add),
        ),
      );
    });
  }

  void _openThemeSelector() {
    showModalBottomSheet(
      context: context,
      builder: (context) {
        return Wrap(
          children: [
            ListTile(
              leading: const Icon(
                Icons.circle,
                color: Colors.amber,
              ),
              title: const Text('amber'),
              onTap: () => {
                context
                    .read<ThemeModel>()
                    .setTheme(0xffFFF8E1, Brightness.light, "Amber"),
                Navigator.of(context).pop()
              },
            ),
            ListTile(
              leading: const Icon(
                Icons.circle,
                color: Colors.deepPurple,
              ),
              title: const Text('deepPurple'),
              onTap: () => {
                context
                    .read<ThemeModel>()
                    .setTheme(0xffEDE7F6, Brightness.light, "Deep Purple"),
                Navigator.of(context).pop()
              },
            ),
            ListTile(
              leading: const Icon(
                Icons.circle,
                color: Colors.blueGrey,
              ),
              title: const Text('Blue Gray'),
              onTap: () => {
                context
                    .read<ThemeModel>()
                    .setTheme(0xffECEFF1, Brightness.light, "Blue Gray"),
                Navigator.of(context).pop()
              },
            ),
          ],
        );
      },
    );
  }
}
