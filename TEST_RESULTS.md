# Actual test results

2026-09-22, Windows, Chromium 151.0.7922.34 headless.

Six pure-engine groups passed: known probability cases; independent exhaustive ordered enumeration for small bags; mass/support/expectation boundary grid; seeded reproducibility and degenerate cases; invalid input rejection; CSV agreement and tamper rejection.

Seven browser groups passed: offline default run/table; actual CSV equality; actual PNG equality to preview canvas bytes; edit invalidation and impossible draw rejection; maximum settings and narrow layout; delayed PNG cancellation after parameter changes; no application HTTP/runtime errors and no retained input after reload.

Desktop full-page screenshot visually inspected. Narrow viewport tested by automation, not an Android device. PNG was downloaded and compared byte-for-byte with preview encoding; this test did not independently decode its pixels. No customer data used. No cross-model review claimed.

Pending: GitHub publication verification and portable package smoke test. These are not included in the above PASS claims.
