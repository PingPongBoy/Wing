﻿using System.Collections.Concurrent;
using Wing.APM.Persistence;

namespace Wing.APM.Persistence
{
    public class TracerDto
    {
        public TracerDto()
        {
            BeginTime = DateTime.Now;
        }

        public Tracer Tracer { get; set; }

        public HttpTracer HttpTracer { get; set; }

        public SqlTracer SqlTracer { get; set; }

        public ConcurrentDictionary<string, HttpTracerDetail> HttpTracerDetails { get; set; }

        public ConcurrentDictionary<string, SqlTracerDetail> SqlTracerDetails { get; set; }

        public DateTime BeginTime { get; private set; }

        public bool IsStop { get; set; } = false;
    }
}
