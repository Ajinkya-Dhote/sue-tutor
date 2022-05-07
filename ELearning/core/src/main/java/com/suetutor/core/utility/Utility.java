package com.suetutor.core.utility;

import java.util.Collection;

public class Utility {

	public static boolean isNullOrEmpty(Object object) {
		if (object == null) {
			return true;
		}
		if (object instanceof Collection) {
			return CollectionUtility.isNullOrEmpty((Collection<?>) object);
		}
		if (object instanceof String) {
			return ((String)object).isEmpty();
		}
		if (object.getClass().isArray()) {
			if ("int".equals(object.getClass().getComponentType().getSimpleName())) {
				return ((int[]) object).length == 0;
			} else if ("byte".equals(object.getClass().getComponentType().getSimpleName())) {
				return ((byte[]) object).length == 0;
			} else if ("short".equals(object.getClass().getComponentType().getSimpleName())) {
				return ((short[]) object).length == 0;
			} else if ("long".equals(object.getClass().getComponentType().getSimpleName())) {
				return ((long[]) object).length == 0;
			} else if ("float".equals(object.getClass().getComponentType().getSimpleName())) {
				return ((float[]) object).length == 0;
			} else if ("double".equals(object.getClass().getComponentType().getSimpleName())) {
				return ((double[]) object).length == 0;
			} else if ("boolean".equals(object.getClass().getComponentType().getSimpleName())) {
				return ((boolean[]) object).length == 0;
			} else if ("char".equals(object.getClass().getComponentType().getSimpleName())) {
				return ((char[]) object).length == 0;
			}
			return ((Object[]) object).length == 0;
		}
		return false;
	}

	public static class CollectionUtility {
		public static boolean isNullOrEmpty(Collection<?> collection) {
			return collection == null || collection.isEmpty();
		}
	}

}
