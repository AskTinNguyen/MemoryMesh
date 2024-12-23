// src/core/managers/interfaces/ISearchManager.ts

import {IManager} from './IManager.js';
import type {Graph} from '../../../types/graph.js';

/**
 * Interface for search-related operations in the knowledge graph.
 * Defines the contract for searching nodes based on queries and retrieving specific nodes.
 */
export abstract class ISearchManager extends IManager {
    /**
     * Searches for nodes in the knowledge graph based on a query.
     */
    abstract searchNodes(query: string): Promise<Graph>;

    /**
     * Retrieves specific nodes from the knowledge graph by their names.
     */
    abstract openNodes(names: string[]): Promise<Graph>;

    /**
     * Reads and returns the entire knowledge graph.
     */
    abstract readGraph(): Promise<Graph>;
}