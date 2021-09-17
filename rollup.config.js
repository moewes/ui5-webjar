import json from "@rollup/plugin-json";

export default {
	input: "src/index.js",
	output: {
		dir: "target/classes/META-INF/resources/webjars/cloud-ui-ui5/0.3.0/",
		format: "esm"
	},
	plugins: [
	
		json()
		
	]
};