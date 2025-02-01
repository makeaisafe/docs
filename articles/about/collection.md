# Collection of Technical Solutions by Domain Risk Category

- Local Explainability: The paper leverages local explanation techniques, specifically LIME (Local Interpretable Model-agnostic Explanations), to approximate the model's behavior. LIME generates interpretable models, such as decision trees, that explain predictions for a specific instance. In this approach, the local explanation is used as the "path" in the symbolic execution, and the decisions in the decision tree are toggled to generate new constraints

Main Source: https://arxiv.org/pdf/1809.03260
- Dynamic Symbolic Execution (DSE): This technique systematically explores different execution paths in a program to generate test inputs. It starts with a random input and analyzes the path, generating path constraints (conditions on input attributes). These constraints are then toggled to create new constraints, which are solved to generate new inputs that explore different paths. The paper adapts DSE to work with uninterpretable AI models

Main Source: https://arxiv.org/pdf/1809.03260
