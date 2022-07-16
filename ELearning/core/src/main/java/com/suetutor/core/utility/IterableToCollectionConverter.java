package com.suetutor.core.utility;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class IterableToCollectionConverter {

	public static <T> List<T> convertToList(Iterable<T> iterable) {
		if (iterable == null) {
			return Collections.emptyList();
		}
		List<T> list = new ArrayList<>();
		iterable.forEach(list::add);
		return list;
	}
}
