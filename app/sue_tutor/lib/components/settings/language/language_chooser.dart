import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:provider/provider.dart';
import 'package:sue_tutor/model/locale_model.dart';

class LanguageChooser extends StatefulWidget {
  const LanguageChooser({Key? key}) : super(key: key);

  @override
  State<LanguageChooser> createState() => _LanguageChooserState();
}

class _LanguageChooserState extends State<LanguageChooser> {
  get languages => null;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(AppLocalizations.of(context).language),
        ),
        body: ListView(children: [
          ...renderAllSupportedLanguages()
          // ListTile(
          //   trailing: const Icon(Icons.navigate_next),
          //   title: Text(AppLocalizations.of(context).englishLanguage),
          //   onTap: () => {
          //     context.read<LocaleModel>().setAppLocale(const Locale('en', '')),
          //   },
          // ),
          // ListTile(
          //   trailing: const Icon(Icons.navigate_next),
          //   title: Text(AppLocalizations.of(context).marathiLanguage),
          //   onTap: () => {
          //     context.read<LocaleModel>().setAppLocale(const Locale('mr', '')),
          //   },
          // ),
          // ListTile(
          //   trailing: const Icon(Icons.navigate_next),
          //   title: Text(AppLocalizations.of(context).hindiLanguage),
          //   onTap: () => {
          //     context.read<LocaleModel>().setAppLocale(const Locale('hi', '')),
          //     // Provider.of<LocaleModel>(context, listen: true)
          //     //     .setAppLocale(const Locale('hi', '')),
          //   },
          // ),
          // ListTile(
          //   trailing: const Icon(Icons.navigate_next),
          //   title: Text(AppLocalizations.of(context).kannadaLanguage),
          //   onTap: () => {
          //     context.read<LocaleModel>().setAppLocale(const Locale('kn', '')),
          //   },
          // ),
        ]));
  }

  renderAllSupportedLanguages() {
    var languages = [
      {
        "name": AppLocalizations.of(context).englishLanguage,
        "languageCode": "en"
      },
      {
        "name": AppLocalizations.of(context).hindiLanguage,
        "languageCode": "hi"
      },
      {
        "name": AppLocalizations.of(context).marathiLanguage,
        "languageCode": "mr"
      },
      {
        "name": AppLocalizations.of(context).kannadaLanguage,
        "languageCode": "kn"
      },
      {
        "name": AppLocalizations.of(context).gujratiLanguage,
        "languageCode": "gu"
      },
      {
        "name": AppLocalizations.of(context).bengaliLanguage,
        "languageCode": "bn"
      },
    ];

    List<ListTile> lan = [];

    for (var l in languages) {
      String? lk = l["name"];
      String? code;
      lk ??= AppLocalizations.of(context).englishLanguage;
      code = l["languageCode"];
      lan.add(ListTile(
        title: Text(lk),
        onTap: () => {
          context.read<LocaleModel>().setAppLocale(Locale(code!, '')),
        },
      ));
    }
    return lan;
  }
}
