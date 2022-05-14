package com.suetutor.core.utility;

import java.util.Collection;

public final class CollectionUtility {

	public static boolean isNullOrEmpty(Collection<?> collection) {
		return collection == null || collection.isEmpty();
	}
}
