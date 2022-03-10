import 'package:flutter/material.dart';
import 'package:sue_tutor/ColorChooser.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:sue_tutor/components/settings/language/language_chooser.dart';

class Settings extends StatelessWidget {
  const Settings({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // ignore: prefer_const_constructors
    return Scaffold(
      appBar: AppBar(
        title: Text(AppLocalizations.of(context).settings),
      ),
      body: ListView(
        children: [
          ListTile(
            leading: Icon(
              Icons.palette,
              color: Theme.of(context).colorScheme.primary,
            ),
            trailing: const Icon(Icons.navigate_next),
            title: Text(AppLocalizations.of(context).theme),
            onTap: () => {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const ColorChooser()),
              )
            },
          ),
          ListTile(
            leading: Icon(
              Icons.language,
              color: Theme.of(context).colorScheme.primary,
            ),
            trailing: const Icon(Icons.navigate_next),
            title: Text(AppLocalizations.of(context).language),
            onTap: () => {
              Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => const LanguageChooser()),
              )
            },
          )
        ],
      ),
    );
  }
}
