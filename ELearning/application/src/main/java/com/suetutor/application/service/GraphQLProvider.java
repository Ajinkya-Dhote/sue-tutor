package com.suetutor.application.service;

import java.io.IOException;
import java.net.URL;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import com.google.common.io.Resources;

import graphql.GraphQL;
import graphql.com.google.common.base.Charsets;
import graphql.schema.GraphQLSchema;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.SchemaGenerator;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;

import static graphql.schema.idl.TypeRuntimeWiring.newTypeWiring;

@Component
public class GraphQLProvider {
	@Autowired
	GraphQLDataFetchers graphQLDataFetchers;

	private GraphQL graphQL;

	@PostConstruct
	public void init() throws IOException {
		URL url = Resources.getResource("schema.graphqls");
		String sdl = Resources.toString(url, Charsets.UTF_8);
		GraphQLSchema graphQLSchema = buildSchema(sdl);
		this.graphQL = GraphQL.newGraphQL(graphQLSchema).build();
	}

	private GraphQLSchema buildSchema(String sdl) {
		TypeDefinitionRegistry typeRegistry = new SchemaParser().parse(sdl);
		RuntimeWiring runtimeWiring = buildWiring();
		SchemaGenerator schemaGenerator = new SchemaGenerator();
		return schemaGenerator.makeExecutableSchema(typeRegistry, runtimeWiring);
	}

	private RuntimeWiring buildWiring() {
		return RuntimeWiring.newRuntimeWiring()
				.type(newTypeWiring("Query").dataFetcher("users", graphQLDataFetchers.getUsersDataFetcher()))
				.type(newTypeWiring("Query").dataFetcher("userByUsername", graphQLDataFetchers.getUserByIdDataFetcher()))
				.type(newTypeWiring("User").dataFetcher("contact", graphQLDataFetchers.getContactDataFetcher()))
				.type(newTypeWiring("Query").dataFetcher("courses", graphQLDataFetchers.getCourses()))
				.build();
	}

	@Bean
	public GraphQL graphQL() {
		return graphQL;
	}
}
