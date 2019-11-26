FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["NOD_TrainingService/MOD_TrainingService.csproj", "NOD_TrainingService/"]
RUN dotnet restore "NOD_TrainingService/MOD_TrainingService.csproj"
COPY . .
WORKDIR "/src/NOD_TrainingService"
RUN dotnet build "MOD_TrainingService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MOD_TrainingService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MOD_TrainingService.dll"]