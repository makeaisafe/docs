# Collection of Technical Solutions by Domain Risk Category

- Local Explainability: The paper leverages local explanation techniques, specifically LIME (Local Interpretable Model-agnostic Explanations), to approximate the model's behavior. LIME generates interpretable models, such as decision trees, that explain predictions for a specific instance. In this approach, the local explanation is used as the "path" in the symbolic execution, and the decisions in the decision tree are toggled to generate new constraints

Main Source: https://arxiv.org/pdf/1809.03260
