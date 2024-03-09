package_json(
    name="hello_pkg",
    scripts=[
        node_test_script(
            coverage_args=["--coverage", "--coverage-directory=.coverage/"],
            coverage_output_files=[".coverage/lcov-report/index.html"],
            coverage_output_directories=[".coverage/lcov-report"],
        ),
        node_build_script(
            entry_point="build",
            extra_env_vars=["FOO=BAR"],
            output_files=["dist_npm/index.js"],
        ),
    ],
)
