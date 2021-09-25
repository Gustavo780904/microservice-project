 package com.iftm.ms.hrpayroll.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.iftm.ms.hrpayroll.entities.Payment;
import com.iftm.ms.hrpayroll.entities.Worker;

@Service
public class PaymentService {
	@Value("${hr-worker.host}")
	private String workerHost;
	@Autowired
	private RestTemplate restTemplate;

	public Payment getPayment(Long workerId, int days) {
		Map<String, String> urlVariables = new HashMap<>();
		urlVariables.put("id", "" + workerId);
		Worker obj = restTemplate.getForObject(workerHost + "/workers/{id}", Worker.class, urlVariables);
		return new Payment(obj.getName(), obj.getDailyIncome(), days);
	}
}
