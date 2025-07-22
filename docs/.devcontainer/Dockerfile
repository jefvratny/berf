FROM node:20-bullseye

# Install basic development tools
RUN apt-get update && apt-get install -y \
    git \
    procps \
    curl \
    wget \
    vim \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Set up non-root user for better security
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /workspace \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Install global npm packages
RUN npm install -g npm@10.2.4 next@14.0.4

# Switch to non-root user
USER $USERNAME

# Set environment variables
ENV NODE_ENV=development
