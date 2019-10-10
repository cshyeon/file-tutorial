const { SpecReporter } = require('jasmine-spec-reporter');

const reporter = new SpecReporter();

jasmine.getEnv().addReporter(reporter);
