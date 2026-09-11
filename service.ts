import * as aws from "@pulumi/aws";
export function createFargateService(cluster: aws.ecs.Cluster) {
  return new aws.ecs.Service("app-service", {
    cluster: cluster.id,
    launchType: "FARGATE",
    desiredCount: 2
  });
}
