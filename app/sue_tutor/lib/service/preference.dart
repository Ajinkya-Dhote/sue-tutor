import 'package:sue_tutor/model/a.dart';

abstract class PreferenceService {
  Future<GlobalPreference> fetchGlobalPreference();
}
