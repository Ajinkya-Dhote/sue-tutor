package com.suetutor.service.notification;

import com.suetutor.model.notification.Notification;

public interface Notifier {

	String getType();

	void send(Notification notification);
}
