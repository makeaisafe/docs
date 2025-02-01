# Collection of Technical Solutions by Domain Risk Category

- Dynamic Symbolic Execution (DSE): This technique systematically explores different execution paths in a program to generate test inputs. It starts with a random input and analyzes the path, generating path constraints (conditions on input attributes). These constraints are then toggled to create new constraints, which are solved to generate new inputs that explore different paths. The paper adapts DSE to work with uninterpretable AI models

Main Source: https://arxiv.org/abs/1809.03260
