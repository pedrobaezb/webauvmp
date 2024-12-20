 docker build --platform linux/arm64 -t web-auvmp-frontend:24.12.20 -t latest .
 rem docker save web-auvmp-frontend:24.12.20 | plink -load miniservidor1 "sudo k3s ctr -n k8s.io image import --local -"
 rem pscp -load miniservidor1 .\*.yaml miniservidor1:./auvmp/
