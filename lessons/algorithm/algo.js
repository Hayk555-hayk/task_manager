let algoTitle = 'Algorithms, Part 1';

let algoTutorial = `
    <b><a href='https://www.coursera.org/learn/algorithms-part1/lecture/EcF3P/quick-find'>Ссылка на урок</a></b><br/>
    Изначально нужно понять любую задаччу, после найти алгоритм выполнения этой задачи<br/>
    Union find - допустим у нас есть несколько обьектов, так же есть связь между некоторыми обьектами<br/>
    Нужно написать функцию которая будет определять есть ли связь у обьектов, даже если она не прямая
    <img src="./lessons/algorithm/algo/1.png" />
    <pre>
    <?php

/**
 * Реализация алгоритма Union-Find с использованием деревьев по рангу (Path Compression)
 */
class UnionFind {
  private $parent;
  private $rank;

  public function __construct(int $n) {
    // Массив родителей элементов (каждый элемент указывает на своего родителя)
    $this->parent = range(0, $n - 1);
    // Массив рангов элементов (используется для оптимизации Path Compression)
    $this->rank = array_fill(0, $n, 0);
  }

  /**
   * Функция поиска представителя множества (find-операция)
   *
   * @param int $x - элемент, для которого ищем представителя
   * @return int - представитель множества, которому принадлежит элемент x
   */
  public function find(int $x): int {
    // Рекурсивно поднимаемся по дереву родителей, пока не найдем корень
    if ($this->parent[$x] !== $x) {
      $this->parent[$x] = $this->find($this->parent[$x]);
    }
    return $this->parent[$x];
  }

  /**
   * Функция объединения множеств (union-операция)
   *
   * @param int $x - первый элемент
   * @param int $y - второй элемент
   */
  public function union(int $x, int $y): void {
    // Находим представителей множеств, к которым принадлежат элементы x и y
    $root_x = $this->find($x);
    $root_y = $this->find($y);

    // Объединяем множества по рангу
    if ($this->rank[$root_x] > $this->rank[$root_y]) {
      $this->parent[$root_y] = $root_x;
    } elseif ($this->rank[$root_x] < $this->rank[$root_y]) {
      $this->parent[$root_x] = $root_y;
    } else {
      $this->parent[$root_y] = $root_x;
      $this->rank[$root_x]++;
    }
  }
}

// Пример использования
$uf = new UnionFind(5);
$uf->union(0, 2);  // Объединяем элементы 0 и 2
$uf->union(1, 3);  // Объединяем элементы 1 и 3
$uf->union(1, 0);  // Объединяем множества {0, 2} и {1, 3} (теперь все элементы объединены)

// Проверка принадлежности к одному множеству
if ($uf->find(0) === $uf->find(4)) {
  echo "Элементы 0 и 4 принадлежат одному множеству\n";
} else {
  echo "Элементы 0 и 4 не принадлежат одному множеству\n";
}

    </pre>
`