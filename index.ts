import * as aws from "@pulumi/aws";

const cluster = new aws.ecs.Cluster("app-cluster", {
    settings: [{ name: "containerInsights", value: "enabled" }]
});
export const clusterName = cluster.name;
