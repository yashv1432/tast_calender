import React, { useMemo, useState } from "react";
import spacetime from "spacetime";
import TimezoneSelect, { allTimezones } from "react-timezone-select";

export default function Timezone() {
  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [datetime, setDatetime] = useState(spacetime.now());

  useMemo(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.goto(tzValue));
  }, [tz]);

  return (
    <div className="timezone">
      <p>Timezone:</p> 
      <div className="timezone--wrapper">
        <TimezoneSelect
          value={tz}
          onChange={setTz}
          timezones={{
            ...allTimezones,
            "America/Lima": "Pittsburgh",
            "Europe/Berlin": "Frankfurt",
          }}
        />
      </div>
      <div className="output-wrapper">
      </div>
    </div>
  );
}
